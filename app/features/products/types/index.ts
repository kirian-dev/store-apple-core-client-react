export interface IProduct {
  _id: string;
  name: string;
	image: string;
	productName: string;
	brand: string;
	category: string;
	model: string;
	characteristics: {
		display?: string;
		processor?: string;
		graphics?: string;
		operatingSystem?: string;
		camera?: string;
		price?: number;
		availability?: true;
		description?: string;
	};
}
