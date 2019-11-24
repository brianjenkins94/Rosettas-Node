const input = [
	"2♥ 2♦ 2♣ K♣ Q♦",	// Three-of-a-kind
	"2♥ 5♥ 7♦ 8♣ 9♠",	// High-card
	"A♥ 2♦ 3♣ 4♣ 5♦",	// Straight
	"2♥ 3♥ 2♦ 3♣ 3♦",	// Full-house
	"2♥ 7♥ 2♦ 3♣ 3♦",	// Two-pair
	"2♥ 7♥ 7♦ 7♣ 7♠",	// Four-of-a-kind
	"10♥ J♥ Q♥ K♥ A♥",	// Straight-flush
	"4♥ 4♠ K♠ 5♦ 10♠",	// One-pair
	"Q♣ 10♣ 7♣ 6♣ 4♣"	// Flush
];

const deck = {
	"spades": ["A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠"],
	"hearts": ["A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥"],
	"diamonds": ["A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦"],
	"clubs": ["A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣"]
}