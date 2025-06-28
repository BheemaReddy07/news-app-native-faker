import { faker } from "@faker-js/faker";

const generateFakeNews = (limit) =>{
    const newsList = [];

    for(let i=0;i<limit;i++){
        const title = faker.lorem.sentence({min:3,max:5});
        const content = faker.lorem.paragraph();
        const date = faker.date.past();
        const id = faker.string.uuid();
        const image = `https://picsum.photos/seed/news${i}/800/400`;
        const author = faker.person.fullName();
        newsList.push({title,content,date,id,image,author});
    }
    return newsList;
}

export default generateFakeNews;