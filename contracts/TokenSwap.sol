// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenSwap {
    address public tokenA;
    address public tokenB;

    constructor(address _tokenA, address _tokenB) {
        tokenA = _tokenA;
        tokenB = _tokenB;
    }

    function swap(uint256 amountA) external {
        require(IERC20(tokenA).balanceOf(msg.sender) >= amountA, "Insufficient balance");
        // Logic to calculate amountB based on a fixed rate or other logic
        uint256 amountB = amountA; // For simplicity, 1:1 swap

        IERC20(tokenA).transferFrom(msg.sender, address(this), amountA);
        IERC20(tokenB).transfer(msg.sender, amountB);
    }
} 