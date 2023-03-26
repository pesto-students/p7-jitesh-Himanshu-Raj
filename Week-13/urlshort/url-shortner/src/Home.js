import { useCallback, useRef, useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const urlRef = useRef();
  console.log("urlRef", urlRef);
  console.log("url", url);
  console.log("data", data);
  // console.log("error", error);

  const shortUrlHandler = useCallback(async () => {
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      console.log("res", res);
      const resData = await res.json();
      console.log("resData", resData);
      if (!resData.ok) {
        setError(resData.error);
      }
      const shortLink = resData?.result;
      setData(shortLink);
      setUrl("");
    } catch (err) {
      setError("Error while fetching, Try again with valid url!");
    }
  }, [url]);

  const copyToClipBoard = async () => {
    try {
      if (data) {
        await navigator.clipboard.writeText(data.full_short_link);
        alert(`You have copied "${data.full_short_link}"`);
      }
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#eff1f7",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: 0,
      }}
    >
      <h1
        style={{
          marginTop: 0,
          top: 0,
          paddingTop: 0,
        }}
      >
        Shorter your links with just one click
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "wheat",
          alignSelf: "center",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <div>
          <input
            style={{ width: 300, margin: 0 }}
            pattern="https?://.+"
            // ref={urlRef}
            type="url"
            placeholder="Put link to short it"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <button type="submit" onClick={shortUrlHandler}>
            Shorten it
          </button>
        </div>
      </div>

      {!data && error ? (
        <div>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      ) : null}

      {data ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "turquoise",
            gap: 100,
            padding: 20,
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          <div>
            <h6>{data?.original_link}</h6>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              gap: 10,
            }}
          >
            <h6 style={{ color: "Highlight" }}>{data?.full_short_link}</h6>
            <button
              style={{ height: 30, cursor: "pointer" }}
              title="Copy link"
              onClick={copyToClipBoard}
            >
              Copy
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
