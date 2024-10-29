import news1 from '../Content/images/news1.webp';
import news2 from '../Content/images/news2.webp';
import news3 from '../Content/images/news3.webp';
import Carousel from './Articles';

function News() {
	const carouselItems = [
		{
			title: 'Article 1',
			image: news1,
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos! Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel, doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium adipisci exercitationem officia minima!`,
		},
		{
			title: 'Article 2',
			image: news2,
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos! Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel, doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium adipisci exercitationem officia minima!`,
		},
		{
			title: 'Article 3',
			image: news3,
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos! Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel, doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium adipisci exercitationem officia minima!`,
		},
		{
			title: 'Article 4',
			image: news2,
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos! Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel, doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium adipisci exercitationem officia minima!`,
		},
	];
	return (
		<section className='news-section'>
			<div className=''>
				<div className='news-intro'>
					<h2>News about our dogs</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, provident sed obcaecati consectetur
						reiciendis voluptatum nesciunt doloremque iure quasi est nihil. Beatae, mollitia aut laboriosam nihil est
						porro possimus magni!
					</p>
				</div>
				<div className='articles'>
					<Carousel items={carouselItems} />
				</div>
			</div>
		</section>
	);
}

export default News;
