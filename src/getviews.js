export const getViews = async (videoId) => {
    return await fetch("http://localhost:4000/views", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoId: videoId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.views.length;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  export const GetAllViews = () => {
    return fetch("http://localhost:4000/allviews", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
  };