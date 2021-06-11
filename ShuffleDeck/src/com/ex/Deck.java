package com.ex;

import java.util.ArrayList;
import java.util.List;

public class Deck {
    List<Card> myDeck = new ArrayList();
    List<Card> drawnCards = new ArrayList();

    public Deck() {
        for(int i = 0; i < 13; i++){
            String[] suites = {"Club", "Spade", "Heart", "Diamond"};

            for(int j = 0; j < suites.length; j++){
                Card newCard = new Card(suites[j], i + 1);
                myDeck.add(newCard);
            }
        }
    }

    public Card drawCard(){
        Card drawnCard = myDeck.get(0);
        myDeck.remove(0);
        drawnCards.add(drawnCard);;
        return drawnCard;
    }


    public void shuffleDeck() {
        for(int i = 0; i < myDeck.size(); i++){
            int rand = (int)(Math.random() * myDeck.size());
            Card oldPlace = myDeck.get(i);
            myDeck.set(i, myDeck.get(rand));
            myDeck.set(rand , oldPlace);
        }
    }

    public void reshuffleDeck(){
        for(int i = 0; i < drawnCards.size(); i++){
            myDeck.add(drawnCards.get(i));
        }
        drawnCards.clear();
        shuffleDeck();
    }
}
