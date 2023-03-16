import Date from '../Date';
import BlogPost from '../BlogPost';

const BloggPage = () => {
    return <div className="blog-page">
        <div class="blog-intro">
            <h2>Blogg</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, provident sed obcaecati
                consectetur reiciendis voluptatum, tempora veniam voluptas dolores ex a eum adipisci vel,
                doloribus quisquam. Fugit pariatur sed dolor, !</p>
        </div>

        <Date />
        <BlogPost />
        <div />
    </div>;
}


export default BloggPage;