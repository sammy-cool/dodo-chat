import React from "react"
import Helmet from "react-helmet"

const MetaData = ({ title }) => {
  const todayDate = new Date();
  const currentYearMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentMonth = currentYearMonth[todayDate.getMonth()].substring(0, 3);
  const currentYear = todayDate.getFullYear();
  const titleContent = `DODO | chat - ${currentMonth} (${currentYear})`;

  var canonicalUrl = window.location.href ;

    return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      {/* General tags */}
      <title>{ `${title} - ${titleContent}` }</title>
      <meta name="description" content={ `Chat app for you to get connected around the world with everyone and enjoy every moment with... - ${title} - ${titleContent}` } />
      
      {/* site indexing */}
      <meta name="robots" content="index,follow" />

      {/* canonical url */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={ `${title} - ${titleContent}` } />
      <meta property="og:description" content={ `Chat app for you to get connected around the world with everypne - ${title} - ${titleContent}` } />
      <meta property="og:type" content="website" />
    </Helmet>
    )
}

export default MetaData