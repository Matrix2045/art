// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract BalanceManager{
    mapping(address =>uint256)public  balanceOf;

    string public name ="2045";
    string public symbol ="Y";
    uint8 public  decimals = 0;

constructor (uint256 totalBalance){
    balanceOf[msg.sender]= totalBalance;
}
    function transfer(address to, uint256 amount)public {
            address from = msg.sender;
            
            uint256 fb = balanceOf[from];

            uint256 tb = balanceOf[to];

           

            require(amount <=fb, "from account do not have enough money!");
            fb -= amount;
            tb += amount;
            balanceOf[from] = fb;
            balanceOf[to] =tb;

          
    }
        

}