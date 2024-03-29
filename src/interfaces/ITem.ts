export default interface ITem {
    title: string,
    description: string,
    photo: string,
    size: number,
    serving: number,
    price: number,
    id: number,
    category: ICategory
};

interface ICategory {
    id: number,
    label: string
}
