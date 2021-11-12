import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {

  const image = getImage(data.file.childImageSharp);

  console.log(image);

  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-2xl tracking-tight font-bold text-center text-gray-900 sm:text-5xl md:text-6xl mb-20">
          Gatsby Plugin Image Specificity Issue with Tailwind
        </h1>
        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-12 sm:space-y-0 sm:bg-gray-200 p-5 sm:p-10 rounded-2xl sm:hover:bg-blue-200"
          >
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3">
            <GatsbyImage alt="Broken stuff" image={image} className="object-cover shadow-lg rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    file(relativePath: {eq: "art.jpeg"}) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default IndexPage;
