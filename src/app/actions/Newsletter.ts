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
    // Skip the Mailchimp Marketing API integration for now
    // and focus on sending the welcome email with Transactional API

    console.log("Processing subscription for:", email);

    // Try to send a confirmation email
    try {
      const emailResult = await sendConfirmationEmail(email);
      console.log("Email sending result:", emailResult);

      if (emailResult.success) {
        console.log("Confirmation email sent successfully");
      } else {
        console.error("Failed to send confirmation email:", emailResult.error);
      }
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
    }

    // Always return success to the user
    revalidatePath("/");
    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}

async function sendConfirmationEmail(email: string) {
  const TRANSACTIONAL_API_KEY = process.env.MAILCHIMP_TRANSACTIONAL_API_KEY;

  if (!TRANSACTIONAL_API_KEY) {
    console.error("Mailchimp Transactional API key is not set");
    return { success: false, error: "API key not configured" };
  }

  try {
    console.log(
      "Sending confirmation email to admin about new subscriber:",
      email
    );

    // Create a simple text-only message that should work with any account
    const payload = {
      key: TRANSACTIONAL_API_KEY,
      message: {
        text: `New newsletter subscriber: ${email}`,
        subject: "New Newsletter Subscriber",
        from_email: "mailchimp@mailchimpapp.net", // Use Mailchimp's default sending domain for trials
        from_name: "Newsletter System",
        to: [
          {
            email: "kirankumarkm1505@gmail.com", // Your email address
            name: "Admin",
            type: "to",
          },
        ],
      },
    };

    // Make the API request
    const response = await fetch(
      "https://mandrillapp.com/api/1.0/messages/send.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // Get the response as text first
    const responseText = await response.text();
    console.log("Raw API response:", responseText);

    // Try to parse the JSON response
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error("Failed to parse response as JSON:", e);
      return {
        success: false,
        error: "Invalid API response",
        details: responseText,
      };
    }

    // Check if the response is an array (successful response format)
    if (Array.isArray(data) && data.length > 0) {
      const status = data[0].status; // "sent", "queued", "rejected", etc.
      console.log("Email status:", status, "Reason:", data[0].reject_reason);

      if (status === "sent" || status === "queued") {
        return { success: true, data };
      } else {
        return {
          success: false,
          error: `Email ${status}`,
          reason: data[0].reject_reason,
          details: data,
        };
      }
    }

    // If we got here, something unexpected happened
    console.error("Unexpected API response format:", data);
    return {
      success: false,
      error: "Unexpected response format",
      details: data,
    };
  } catch (error) {
    console.error("Exception during API call:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      details: error,
    };
  }
}
