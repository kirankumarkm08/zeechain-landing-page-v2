"use server";

import { revalidatePath } from "next/cache";

interface SubscribeResult {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletter(
  prevState: SubscribeResult,
  formData: FormData
): Promise<SubscribeResult> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "Email is required" };
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    const response = await fetch(
      `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            SUBSCRIPTION: "Active",
          },
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      revalidatePath("/");
      return {
        success: true,
        message: "Successfully subscribed to the newsletter!",
      };
    } else if (response.status === 400 && data.title === "Member Exists") {
      return {
        success: true,
        message: "You are already subscribed to our newsletter!",
      };
    } else {
      console.error("Mailchimp API Error:", data);
      return {
        success: false,
        message: "Error subscribing to the newsletter. Please try again later.",
      };
    }
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}
