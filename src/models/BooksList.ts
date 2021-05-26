import IBook from "@/api/IBook";
import BooksListServices from "@/services/BooksListServices";
import Book from "@/models/Book";

export default class BooksList {
    private m_list: Book[] = [];

    private m_loadingList = false;

    private m_page = 1;
    private m_total_books = 0;

    public get list(): Book[] {
        return this.m_list;
    }

    public get page(): number {
        return this.m_page;
    }

    public set page(val: number) {
        this.m_page = val;
    }

    public isLoadingList(): boolean {
        return this.m_loadingList;
    }

    public getTotalBooks(): number {
        return this.m_total_books;
    }

    public async loadList(): Promise<void> {
        this.m_loadingList = true;
        try {
            const result = await BooksListServices.loadList(this.page);
            this.m_list = result.rows.map((book: IBook) => new Book(book));
            const total_books = Math.floor(result.total / 10);
            if (total_books !== this.m_total_books)
                this.m_total_books = total_books;
        } catch (e) {
            console.warn("Error loading the books", e.message);
        } finally {
            this.m_loadingList = false;
        }
    }
}
