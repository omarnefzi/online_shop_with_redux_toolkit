import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { HomeBtn } from "../shared/Buttons";
import { fetchBlogById } from "../Store/blogsSlice";

const BlogsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(fetchBlogById(id)); 
  }, [dispatch,id]);

  

  return (
    <div className="bg-gray-100  ">
      <div className="relative ">
        <div className="m-4 absolute top-2 left-0  ">
          <Link to="/">
            <HomeBtn />
          </Link>
        </div>
        <article className=" max-w-2xl px-6 py-24 mx-auto space-y-12 bg-slate-50 dark:text-gray-50">
          <div className="mb-9">
            <div className="w-full mx-auto space-y-4 text-center">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {blogs.title}{" "}
              </h1>
              <p className="text-sm dark:text-gray-400">
                by
                <span className=" text-violet-400">
                  <span>{blogs.avatarName}</span>
                </span>
                on
                <time>{blogs.postedDate}</time>
              </p>
            </div>
            <div className="dark:text-gray-100 mt-4">
              <p>{blogs.description}</p>
            </div>
            <div className=" border-t dark:border-gray-700 mt-4">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
                  src={blogs.avatarImg}
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">
                    {blogs.avatarName}
                  </h4>
                  <p className="dark:text-gray-400">
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                    Integer velit ligula, semper sed nisl in, cursus commodo
                    elit. Pellentesque sit amet mi luctus ligula euismod
                    lobortis ultricies et nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogsDetails;
