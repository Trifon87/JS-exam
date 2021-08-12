class ArtGallery {
    constructor(creator ){
        this.creator  = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];

    }

    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)){
            throw new Error("This article model is not included in this gallery!")
        }
        let currArticle = this.listOfArticles.find(x => x.articleName == articleName);
        if(currArticle && currArticle.articleName == articleName){
            currArticle.quantity += quantity;
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
        // TODO...•	If the articleName already exists in listOfArticles array and the articleModel 
        // is the same just add the new quantity to the old one
        let article = {
            articleModel,
            articleName,
            quantity: Number(quantity)
        }
        this.listOfArticles.push(article);
    }

    inviteGuest ( guestName, personality){
        let currentGuest = this.guests.find(x => x.guestName == guestName)

        if(this.guests.some(x => x.guestName == guestName)){
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 50;
        if (personality == "Vip"){
            points = 500;
        } 
        else if(personality == "Middle"){
            points = 250;
        } 
       
        let guest = {
            guestName,
            points: Number(points),
            purchaseArticle: 0
        } 
        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`
    }

    buyArticle ( articleModel, articleName, guestName){
        let currArticle = this.listOfArticles.find(x =>x.articleName == articleName);
       if(!this.listOfArticles.some(x =>x.articleName == articleName) || !this.possibleArticles.hasOwnProperty(articleModel)){
           throw new Error ("This article is not found.")
       }
       
       if(currArticle.quantity <= 0){
           return `The ${articleName} is not available.`
       }
       let currentGuest = this.guests.find(x => x.guestName == guestName)
       if(!currentGuest){
           return "This guest is not invited.";
       }
       if(currentGuest.points < this.possibleArticles[articleModel]){
            return "You need to more points to purchase the article."
       }
       currentGuest.points -= this.possibleArticles[articleModel];
       currentGuest.purchaseArticle += 1;
       currArticle.quantity -= 1;
    //    this.listOfArticles.pop(currArticle) - not sure
       return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

    }

    showGalleryInfo (criteria){
        if (criteria == 'article'){
            let result = ['Articles information:']
            this.listOfArticles.forEach(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`))
            return result.join('\n')
        }
        if (criteria == 'guest'){
            let result = ['Guests information:']
            this.guests.forEach(x => result.push(`${x.guestName} - ${x.purchaseArticle}`))
            return result.join('\n')
        }

    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));


// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
