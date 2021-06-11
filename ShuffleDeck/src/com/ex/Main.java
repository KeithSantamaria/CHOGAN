package com.ex;

public class Main {

    public static void main(String[] args) {

        Deck Deck = new Deck();

        Deck.shuffleDeck();

        for(int i = 0; i < 52; i++) {
            System.out.println(Deck.drawCard().toString());
        }
    }

}
