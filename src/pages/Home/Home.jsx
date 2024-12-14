import "./home.css";
import { Button, Input } from "../../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortUrlActions from "../../actions/ShortUrl.actions.js";
import { RecentContainer } from "../../containers/index.js";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, url, isError, message } = useSelector(
    (state) => state.shortUrl
  );

  const [initialValues, setInitialValues] = useState({
    url: "",
    joiner: "",
  });

  useEffect(() => {
    if (url && !isError) setInitialValues({ url: "", joiner: "" });
  }, [isError, url]);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (!userID) dispatch(shortUrlActions.createTempUserID());
    // setInitialValues((prev) => {
    //   return {
    //     ...prev,
    //     userID: userID,
    //   };
    // });
  }, [dispatch]);

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

  return (
    <>
      <h1 className="title">Transform And Shorten Your URL</h1>
      <form action="/" method="POST" onSubmit={handleSubmit}>
        <div className="url form-control">
          <Input
            placeholder="enter your link"
            name="url"
            value={initialValues.url}
            handleChange={handleChange}
          />
          <label htmlFor="url">Url</label>
        </div>
        <div className="joiner form-control">
          <Input
            placeholder="enter something"
            size="half"
            name="joiner"
            value={initialValues.joiner}
            handleChange={handleChange}
          />
          <label htmlFor="joiner">Joiner</label>
        </div>
        <Button label="Create" isSubmitting={isLoading} />
      </form>
      {!isError && url ? (
        <div className="url-container">
          <span className="success-message">{message + " "}</span>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
      ) : null}
      {isError ? <div className="error-message">{message}</div> : null}
      <RecentContainer />
    </>
  );
};

export default Home;
