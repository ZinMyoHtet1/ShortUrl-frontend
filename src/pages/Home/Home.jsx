import "./home.css";
import { Button, Input } from "../../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortUrlActions from "../../actions/ShortUrl.actions.js";
import { RecentContainer } from "../../containers/index.js";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, url, isError, message, recents } = useSelector(
    (state) => state.shortUrl
  );

  const [initialValues, setInitialValues] = useState({
    url: "",
    joiner: "",
  });

  const [sliceIndex, setSliceIndex] = useState(4);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (url && !isError) setInitialValues({ url: "", joiner: "" });
    if (!userID) dispatch(shortUrlActions.createTempUserID());
    dispatch(shortUrlActions.fetchByUserID(userID));
  }, [dispatch, isError, url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      shortUrlActions.createShortUrl({
        ...initialValues,
        userID: localStorage.getItem("userID"),
      })
    );
  };

  const handleChange = (e) => {
    setInitialValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLoadMore = () => {
    setSliceIndex((prev) => {
      return prev + 4;
    });
  };

  return (
    <>
      <h1 className="title">Transform And Shorten Your URL</h1>
      <form action="/" method="POST" onSubmit={handleSubmit}>
        <div className="url form-control">
          <label htmlFor="url">Url</label>
          <Input
            placeholder="enter your link"
            name="url"
            value={initialValues.url}
            handleChange={handleChange}
          />
        </div>
        <div className="joiner form-control">
          <label htmlFor="joiner">Joiner</label>

          <Input
            placeholder="enter something"
            size="half"
            name="joiner"
            value={initialValues.joiner}
            handleChange={handleChange}
          />
        </div>
        <div className="button-container">
          {!isError && url ? (
            <span className="success-message">{message + " "}</span>
          ) : (
            <div className="error-message">{message}</div>
          )}
          <Button label="Create" isSubmitting={isLoading} />
        </div>
      </form>
      {/* {!isError && url ? (
        <div className="url-container">
          <span className="success-message">{message + " "}</span>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
      ) : null} */}
      {/* {isError ? <div className="error-message">{message}</div> : null} */}
      {recents.length ? (
        <RecentContainer recents={recents.slice(0, sliceIndex)} />
      ) : null}
      {recents.length > sliceIndex ? (
        <button onClick={handleLoadMore}>Load MOre</button>
      ) : null}
    </>
  );
};

export default Home;
