import GetAllProductById from "@/data/getAllProductById";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Product } from "@/store/types";
import GetAllProducts from "@/data/getAllProducts";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";

export default function Product() {
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState<Product | null>(null);
	const { title } = useParams<{ title: string | undefined }>();
	const productTitle = title ? decodeURIComponent(title) : "";

	function handleClickImage(e: React.MouseEvent<HTMLDivElement>) {
		const image = e.target as HTMLElement;
		const div = e.currentTarget.children as HTMLCollectionOf<HTMLElement>;
		if (image.classList.contains("img-notActive")) {
			Array.from(div).forEach((img) => {
				if (img.classList.contains("img-active")) {
					img.classList.remove("img-active");
					img.classList.add("img-notActive");
				}
			});

			image.classList.remove("img-notActive");
			image.classList.add("img-active");
		}
	}

	useEffect(() => {
		// ! here
		setLoading(true);
		GetAllProducts()
			.then((data) => {
				const p: Product | undefined = data.find(
					(x: Product) => x.title === productTitle
				);
				if (p?.id) {
					GetAllProductById(p.id)
						.then((p) => {
							setLoading(true);
							setProduct(p);
						})
						.catch((error) => console.error(error))
						.finally(() => {
							setLoading(false);
						});
				} else {
					setProduct(null);
				}
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="py-5 px-4 max-lg:relative max-lg:z-10 bg-backGround text-[#2B3445] flex flex-col items-center gap-5">
			{loading ? (
				<div className="h-dvh">
					<AiOutlineLoading className="text-primary absolute left-1/2 text-5xl transform -translate-x-1/2 animate-spin  top-80" />
				</div>
			) : (
				<>
					<div className="w-full h-fit">
						<Link to={`/`}>
							<button className="">
								<IoIosArrowBack className="text-3xl" />
							</button>
						</Link>
					</div>
					<div className="grid gap-10 max-lg:grid-cols-1 grid-cols-2">
						<div className="flex flex-col space-y-10">
							<div className="border border-[#e3e9ef] rounded-[24px] h-[300px] py-5">
								<img src={product?.image} className="h-full mx-auto" alt="" />
							</div>
							<div
								className="flex justify-center items-center gap-4"
								onClick={handleClickImage}
							>
								<div className="relative before:absolute border img-active rounded-[12px] w-fit h-fit px-5 py-5">
									<img
										src={product?.image}
										className="w-[64px] h-[64px] mx-auto"
										alt=""
									/>
								</div>
								<div className="relative border border-[#e3e9ef] rounded-[12px] w-fit h-fit px-5 py-5 before:absolute img-notActive">
									<img
										src={product?.image}
										className="w-[64px] h-[64px] mx-auto"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<h1 className="text-[#2B3445] font-semibold text-3xl">
								{product?.title}
							</h1>
							<div className="flex items-center gap-2">
								<p>Rated:</p>
								{product && (
									<div className="flex items-center gap-1">
										<Star key={product.id} p={product} />
									</div>
								)}
								<span>({product?.rating.rate})</span>
							</div>
							<p>{product?.description}</p>
							<div>
								<p className="text-primary font-semibold text-2xl">
									${product?.price}
								</p>
								<p className="text-sm">Stock Available</p>
							</div>
							<button className="text-sm text-white capitalize bg-primary px-7 py-2 rounded-[8px]">
								add to cart
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
const Star = ({ p }: { p: Product }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		const diff = p.rating.rate - i + 1;

		let fill = 0;
		if (diff >= 1) fill = 100;
		else if (diff > 0) fill = Math.round(diff * 100);
		else fill = 0;
		const id = Math.random().toString(36).substring(2, 9);
		stars.push(
			<svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
				<defs>
					<linearGradient id={`grad-${id}`}>
						<stop offset={`${fill}%`} stopColor="#facc15" />
						<stop offset={`${fill}%`} stopColor="#e5e7eb" />
					</linearGradient>
				</defs>
				<path
					fill={`url(#grad-${id})`}
					d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
				/>
			</svg>
		);
	}
	return stars;
};
