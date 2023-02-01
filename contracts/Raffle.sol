// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

error Raffle__NotEnoughETHEntered();

contract Raffle {


    uint256 private immutable i_entranceFee;
    address payable[] private s_players;

    event RaffleEnter(address index);

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }

    function enterRaffle() public payable {
        if (msg.value < i_entranceFee) {
            revert Raffle__NotEnoughETHEntered();
        }
        s_players.push(payable(msg.sender));
        emit RaffleEnter(msg.sender);
        

    }


}