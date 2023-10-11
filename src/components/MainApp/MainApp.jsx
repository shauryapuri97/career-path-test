import React, { useMemo, useState, useEffect, useContext } from "react";
import "./MainApp.css";
import UserInput from "./components/UserInput";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import Likert from "react-likert-scale";
import LinearProgress from "@mui/material/LinearProgress";
import { UserContext } from "../../UserContext";
import { BASE_URL } from "../../constants/MockData";

function MainApp() {
  const user = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const [viewingQuestionId, setViewingQuestionId] = useState(undefined);
  const viewingQuestionIndex = useMemo(
    () => questions.findIndex((elem) => elem.id === viewingQuestionId),
    [questions, viewingQuestionId]
  );
  const progress = useMemo(
    () => ((viewingQuestionIndex + 1) / questions.length) * 100,
    [viewingQuestionIndex, questions]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState([]);

  const likertOptions = useMemo(
    () => ({
      question: questions[viewingQuestionIndex]?.text,
      responses: [
        { value: 1, text: "Strongly disagree" },
        { value: 2, text: "" },
        { value: 3, text: "" },
        { value: 4, text: "" },
        { value: 5, text: "" },
        { value: 6, text: "" },
        { value: 7, text: "Strongly agree" },
      ],
      onChange: ({ value }) => {
        if (answers.length < questions.length) {
          setAnswers([
            ...answers,
            { questionId: viewingQuestionId, answer: value },
          ]);
          const nextQuestion = questions[viewingQuestionIndex + 1];
          if (nextQuestion) {
            setViewingQuestionId(nextQuestion.id);
          }
        }
      },
      layout: "stacked",
    }),
    [questions, viewingQuestionIndex, viewingQuestionId, answers]
  );

  const onFinishTest = () => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/submissions`, { answers }, { params: { user } })
      .then((res) => window.location.reload(false))
      .catch((err) => {
        window.alert(err.message);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}/questions`, { params: { user } })
        .then((res) => setQuestions(res.data.questions))
        .catch((err) => {
          window.alert(err.message);
        });
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (questions.length) {
      setViewingQuestionId(questions[0].id);
    }
  }, [questions]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return user ? (
    <div className="container">
      <div className="progressContainer">
        Your progress:{" "}
        {`${viewingQuestionIndex === 0 ? 0 : Math.floor(progress)}%`}
        <LinearProgress
          style={{ marginTop: "1rem" }}
          variant="determinate"
          value={viewingQuestionIndex === 0 ? 0 : progress}
        />
      </div>
      <div className="testContainer">
        <div className="test">
          <Typography style={{ alignSelf: "top" }} color="orange">{`Q${
            viewingQuestionIndex + 1
          }/${questions.length}`}</Typography>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <Typography style={{ marginLeft: "1rem" }}>
              In a job I would be motivated by
            </Typography>
            <Likert {...likertOptions} />
          </div>
        </div>
        {answers.length === questions.length && (
          <Button
            variant="contained"
            onClick={onFinishTest}
            style={{
              backgroundColor: `rgb(57, 73, 171)`,
              color: "white",
            }}
          >
            Finish
          </Button>
        )}
      </div>
    </div>
  ) : (
    <UserInput />
  );
}

export default MainApp;
