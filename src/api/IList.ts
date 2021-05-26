import IBook from "@/api/IBook";

export default interface IList {
    total: number;
    rows: IBook[];
}