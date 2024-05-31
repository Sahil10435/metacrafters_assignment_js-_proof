 const nftCollection = [];

function mintNFT(name, age, occupation, hairColor, eyeColor, creator, mintDate) {
    const nft = {
        name: name,
        age: age,
        occupation: occupation,
        hairColor: hairColor,
        eyeColor: eyeColor,
        creator: creator,
        mintDate: mintDate
    };
    nftCollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Age: " + nftCollection[i].age);
        console.log("Occupation: " + nftCollection[i].occupation);
        console.log("Hair Color: " + nftCollection[i].hairColor);
        console.log("Eye Color: " + nftCollection[i].eyeColor);
        console.log("Creator: " + nftCollection[i].creator);
        console.log("Mint Date: " + nftCollection[i].mintDate);
        console.log("-------------------------");
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("Sunil", 20, "Software Engineer", "Black", "Blue", "aklesh", "2023-05-01");
mintNFT("Bhaskar Kumar", 22, "Doctor", "Blue", "Green", "shyam", "2023-05-02");
mintNFT("shivansh", 21, "Artist", "Black", "Brown", "ramu", "2023-05-03");

listNFTs();

console.log("Total Supply: " + getTotalSupply());
