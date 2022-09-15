import useMediumArticles from "hooks/useMediumArticles";
import React from "react";
import { isOdd, removeImage, truncateHtml } from 'helpers';
import { DateTime } from 'luxon';
import dompurify from 'dompurify';


const LIMIT = 4;

const IndexPage = () => {
  const [articles] = useMediumArticles();
  const [currentSlice, setCurrentSlice] = React.useState(LIMIT);

  const loadMore = () => setCurrentSlice(currentSlice + LIMIT);

  const formatArticleDate = (d: string) => {
    const date = DateTime.fromJSDate(new Date(d)).setLocale('en');
    return date.toFormat('DDD');
  }

  return (
    <section>
      <div className="grid grid-cols-12 mb-10 lg:mb-20 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-6 mb-10 lg:mb-0">
          <h1 className="text-6xl text-black text-normal leading-[100%]">Ideas</h1>
          <p className="text-xl lg:w-1/2 mt-4 text-primaryDark">
            Read the latest stories and insights from us and those we support.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="rounded-lg p-6 md:px-8 md:py-9 bg-customPurple h-full flex flex-col justify-between min-h-[228px] lg:min-h-[400px]">
            <p className="text-3xl lg:text-6xl text-black font-normal leading-[100%]">
              Blockchain- <br />
              enabled wealth <br />
              managment and <br />
              social impact.
            </p>
            <div className="flex justify-end mt-10 lg:mt-[14px]">
              <img src="/images/smiley.svg" alt="smiley" height="60" width="60" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-primaryDark mb-8 pb-4">
        <p className="text-base text-black leading-8 font-normal">Stories</p>
      </div>

      {/* articles list */}
      <div className="space-y-10 lg:space-y-20">
        {articles?.slice(0, currentSlice)?.map((article, index) => (
          <article className="grid-cols-12 grid lg:gap-x-8" key={index}>
            <div key={index} className={`col-span-12 md:col-span-6 ${isOdd(index + 1) ? 'lg:order-1' : 'lg:order-2'}`}>
              <img src={article.thumbnail} alt={article.title} className="object-cover rounded-lg h-auto md:h-[400px] w-full" />
            </div>
            <div className={`col-span-12 md:col-span-6 ${isOdd(index + 1) ? 'lg:order-2' : 'lg:order-1'}`}>
              <dd className="text-[#AFAFAF] mb-2 text-base leading-8 mt-4 lg:mt-0">{formatArticleDate(article.pubDate)}</dd>
              <h1 className="text-3xl lg:text-6xl text-[#111827] text-normal leading-[100%] mb-2 whitespace-pre-line line-clamp-3">{ article.title }</h1>
              <div className="text-primaryDark leading-[150%] relative break-words" dangerouslySetInnerHTML={{__html: dompurify.sanitize(removeImage(truncateHtml(article.description, 400, '...')), {FORCE_BODY: true})}}></div>
              <a className="text-customPurple text-base mt-2 block" href={article.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
      {articles?.length > currentSlice && (
        <div className="flex items-center justify-center my-20">
          <button 
            className="px-8 py-[10px] rounded-[32px] border border-primary h-12" 
            onClick={() => loadMore()}
          >Load more</button>
        </div>
      )}
    </section>
  );
};

export default IndexPage;
