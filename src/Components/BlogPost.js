import blog1 from '../Content/images/blog1.webp'
import blog2 from '../Content/images/blog2.webp'
import blog3 from '../Content/images/blog3.webp'
import blog4 from '../Content/images/blog4.webp'
import blog5 from '../Content/images/blog5.webp'

const BlogPost = () => {
    return <>
        <div class="blog-posts">

            <div class="blog-post">
                <img src={blog1} alt="blog-img" />
                <article>
                    <h3>Blog Post 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda ut vero
                        pariatur nemo? Architecto odio animi fugiat laudantium, neque consequuntur dignissimos
                        velit qui porro, tempore suscipit adipisci sequi possimus maiores earum cum quod
                        sapiente accusamus labore officia quisquam delectus veritatis? Ullam, reprehenderit.
                        Nemo sed ex totam excepturi cum dicta.</p>
                    <div class="signee">Hampus | 2023-02-07</div>
                </article>
            </div>

            <div class="blog-post">
                <img src={blog2} alt="blog-img" />
                <article>
                    <h3>Blog Post 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos!
                        Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel,
                        doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium
                        adipisci exercitationem officia minima!</p>
                    <div class="signee">Hampus | 2023-02-07</div>
                </article>
            </div>

            <div class="blog-post">
                <img src={blog3} alt="blog-img" />
                <article>
                    <h3>Blog Post 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos!
                        Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel,
                        doloribus quisquam. </p>
                    <div class="signee">Hampus | 2023-02-07</div>
                </article>
            </div>

            <div class="blog-post">
                <img src={blog4} alt="blog-img" />
                <article>
                    <h3>Blog Post 4</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores necessitatibus quo
                        unde rem repellendus. Nemo inventore totam libero consectetur nobis accusantium neque
                        assumenda asperiores eveniet dolore cumque deserunt magni, vitae blanditiis laborum,
                        soluta placeat velit saepe maiores ut qui voluptate iure. Reprehenderit, nemo
                        dignissimos ab excepturi ducimus, maiores quam, ratione odit adipisci dolorem deserunt
                        accusamus labore voluptatibus.<br /><br /> Sapiente laudantium recusandae animi ex debitis,
                        maiores possimus unde tenetur libero? Iure assumenda error quis cum vero perspiciatis ea
                        laudantium quo totam placeat sequi modi aspernatur enim officia nam corrupti inventore
                        ipsam, molestiae repellendus sed vitae praesentium veritatis odio! Repellat id
                        doloremque reprehenderit.</p>
                    <div class="signee">Hampus | 2023-02-07</div>
                </article>
            </div>

            <div class="blog-post">
                <img src={blog5} alt="blog-img" />
                <article>
                    <h3>Blog Post 5</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis est animi
                        quod commodi ullam velit ab maxime voluptate vero sit veniam ducimus accusantium aut at
                        iste exercitationem labore ut, iure provident! Sunt, id quod ut perspiciatis mollitia
                        sit laudantium tempora neque rerum natus! Obcaecati, dolorem. Culpa quibusdam id itaque
                        ab nobis natus quo sint, ullam repudiandae quas quidem quaerat accusamus ducimus quasi
                        perferendis nulla dolores facere fugit ea ipsa numquam voluptatem. <br /><br />
                        Cumque voluptas quam praesentium repellat necessitatibus iste, molestias tenetur libero
                        delectus corrupti voluptatum! Beatae porro quis sequi possimus asperiores soluta vero
                        at, fugiat tenetur minus adipisci ab suscipit totam odit ut cumque maiores fugit itaque!
                        Aliquid numquam delectus veniam ad labore, quod similique esse maiores deleniti debitis
                        beatae ducimus animi cumque harum molestiae!</p>
                    <div class="signee">Hampus | 2023-02-07</div>
                </article>
            </div>
        </div>

    </>;
}


export default BlogPost;