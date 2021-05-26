import IBook from "@/api/IBook";

export default class Book {
    private m_data: IBook;

    public buyOnMap = {
        "1": { name: "Amazon", URL: "http://www.amazon.com/" },
        "2": { name: "Bookie", URL: "http://www.bookie.com/" },
        "3": { name: "Read", URL: "http://www.read.com/" },
    };

    public constructor(data: IBook) {
        this.m_data = data;
    }

    public getName(): string | null {
        return this.m_data.book_name;
    }

    public getCode(): string {
        return this.m_data.book_code;
    }

    public getDesc(): string | null {
        return this.m_data.book_desc;
    }

    public getText(): string | null {
        return this.m_data.book_text;
    }

    public getYear(): number {
        return this.m_data.publish_year;
    }

    public getAuthor(): string {
        return this.m_data.book_author;
    }

    public getRating(): number {
        return this.m_data.book_rating;
    }

    public getBuyOn(): string[] {
        return this.m_data.buy_on.split("|") || [];
    }
}
