export default interface IBook {
    book_code: string;
    book_name: string | null;
    book_desc: string | null;
    date_updated: string;
    book_id: number;
    book_text: string | null;
    book_author: string;
    book_rating: number;
    publish_year: number;
    buy_on: string;
}
