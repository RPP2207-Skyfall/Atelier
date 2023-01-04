/**
 * @jest-environment jsdom
 */

import react from 'react';
import QandA from "../../client/src/components/QA/QandA.jsx";
import QAList from "../../client/src/components/QA/QAList.jsx";
import QAItem from "../../client/src/components/QA/QAItem.jsx";
import AnswerList from "../../client/src/components/QA/AnswerList.jsx";
import AnswerItem from "../../client/src/components/QA/AnswerItem.jsx";
import AnswerModal from "../../client/src/components/QA/AnswerModal.jsx";
import QuestionModal from "../../client/src/components/QA/QuestionModal.jsx";
import Search from "../../client/src/components/QA/Search.jsx";
import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

var mockData = {
  "product_id": "71698",
  "results": [
      {
          "question_id": 640996,
          "question_body": "Is this product responsibily sourced?",
          "question_date": "2022-05-25T00:00:00.000Z",
          "asker_name": "Tyler Postman",
          "question_helpfulness": 55,
          "reported": false,
          "answers": {
              "5988458": {
                  "id": 5988458,
                  "body": "is it good?",
                  "date": "2022-09-10T00:00:00.000Z",
                  "answerer_name": "KL",
                  "helpfulness": 6,
                  "photos": []
              },
              "5988693": {
                  "id": 5988693,
                  "body": "I believe so",
                  "date": "2022-10-17T00:00:00.000Z",
                  "answerer_name": "yoyo",
                  "helpfulness": 1,
                  "photos": []
              },
              "5988766": {
                  "id": 5988766,
                  "body": "I will buy RPP2205 this one!",
                  "date": "2022-10-20T00:00:00.000Z",
                  "answerer_name": "richguy",
                  "helpfulness": 0,
                  "photos": []
              },
              "5988767": {
                  "id": 5988767,
                  "body": "I like this!",
                  "date": "2022-10-20T00:00:00.000Z",
                  "answerer_name": "me",
                  "helpfulness": 0,
                  "photos": []
              },
              "5988768": {
                  "id": 5988768,
                  "body": "nice one yo!",
                  "date": "2022-10-20T00:00:00.000Z",
                  "answerer_name": "rpp",
                  "helpfulness": 0,
                  "photos": []
              },
              "5988769": {
                  "id": 5988769,
                  "body": "I love these two better",
                  "date": "2022-10-20T00:00:00.000Z",
                  "answerer_name": "jacky",
                  "helpfulness": 3,
                  "photos": [
                      "https://i.ibb.co/KxX2zws/61514863fa21.jpg",
                      "https://i.ibb.co/GWH0b3Q/4ed37ef50cb2.jpg"
                  ]
              },
              "5988833": {
                  "id": 5988833,
                  "body": "not sure",
                  "date": "2022-10-21T00:00:00.000Z",
                  "answerer_name": "jack543",
                  "helpfulness": 1,
                  "photos": []
              },
              "5988951": {
                  "id": 5988951,
                  "body": "answer",
                  "date": "2022-10-23T00:00:00.000Z",
                  "answerer_name": "nickname",
                  "helpfulness": 0,
                  "photos": []
              },
              "5988979": {
                  "id": 5988979,
                  "body": "i love this",
                  "date": "2022-10-24T00:00:00.000Z",
                  "answerer_name": "js",
                  "helpfulness": 0,
                  "photos": []
              },
              "5989005": {
                  "id": 5989005,
                  "body": "This is my question I am adding here",
                  "date": "2022-10-25T00:00:00.000Z",
                  "answerer_name": "myName",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      },
      {
          "question_id": 631377,
          "question_body": "I'm allergic to dye #17, does this product contain any?",
          "question_date": "2019-01-24T00:00:00.000Z",
          "asker_name": "l33tgamer",
          "question_helpfulness": 21,
          "reported": false,
          "answers": {
              "5897227": {
                  "id": 5897227,
                  "body": "Yes",
                  "date": "2019-11-24T00:00:00.000Z",
                  "answerer_name": "n00bgamer",
                  "helpfulness": 8,
                  "photos": []
              },
              "5988771": {
                  "id": 5988771,
                  "body": "No, as you can see in the image",
                  "date": "2022-10-20T00:00:00.000Z",
                  "answerer_name": "Liar",
                  "helpfulness": 3,
                  "photos": [
                      "https://i.ibb.co/KxX2zws/61514863fa21.jpg",
                      "https://i.ibb.co/GWH0b3Q/4ed37ef50cb2.jpg"
                  ]
              }
          }
      },
      {
          "question_id": 631382,
          "question_body": "Where is this product made?",
          "question_date": "2018-10-04T00:00:00.000Z",
          "asker_name": "jbilas",
          "question_helpfulness": 12,
          "reported": false,
          "answers": {
              "5897195": {
                  "id": 5897195,
                  "body": "China",
                  "date": "2018-08-04T00:00:00.000Z",
                  "answerer_name": "Seller",
                  "helpfulness": 20,
                  "photos": []
              }
          }
      },
      {
          "question_id": 631378,
          "question_body": "Why is this product cheaper here than other sites?",
          "question_date": "2018-04-24T00:00:00.000Z",
          "asker_name": "toofast",
          "question_helpfulness": 6,
          "reported": false,
          "answers": {}
      },
      {
          "question_id": 641603,
          "question_body": "Is this TESTING TESTING responsibily sourced?",
          "question_date": "2022-06-01T00:00:00.000Z",
          "asker_name": "Unicorn MAD",
          "question_helpfulness": 2,
          "reported": false,
          "answers": {
              "5985952": {
                  "id": 5985952,
                  "body": "Roger that, hear you loud and clear",
                  "date": "2022-06-03T00:00:00.000Z",
                  "answerer_name": "Tyler",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      },
      {
          "question_id": 631380,
          "question_body": "Does this product run big or small?",
          "question_date": "2018-11-17T00:00:00.000Z",
          "asker_name": "iluvcatz",
          "question_helpfulness": 2,
          "reported": false,
          "answers": {
              "5897211": {
                  "id": 5897211,
                  "body": "It fit fine for me",
                  "date": "2018-01-17T00:00:00.000Z",
                  "answerer_name": "iluvbirds",
                  "helpfulness": 5,
                  "photos": []
              },
              "5897212": {
                  "id": 5897212,
                  "body": "Felt a little smaller than my usual size.",
                  "date": "2018-12-17T00:00:00.000Z",
                  "answerer_name": "iluvbirds",
                  "helpfulness": 6,
                  "photos": []
              }
          }
      },
      {
          "question_id": 631383,
          "question_body": "What fabric is the side made of?",
          "question_date": "2018-11-12T00:00:00.000Z",
          "asker_name": "funnygirl",
          "question_helpfulness": 1,
          "reported": false,
          "answers": {
              "5985536": {
                  "id": 5985536,
                  "body": "I am not sure but its great",
                  "date": "2022-05-26T00:00:00.000Z",
                  "answerer_name": "jane",
                  "helpfulness": 2,
                  "photos": []
              }
          }
      },
      {
          "question_id": 631375,
          "question_body": "Where is this product made?",
          "question_date": "2018-01-24T00:00:00.000Z",
          "asker_name": "iluvcatz",
          "question_helpfulness": 1,
          "reported": false,
          "answers": {
              "5897214": {
                  "id": 5897214,
                  "body": "Made locally!",
                  "date": "2018-11-24T00:00:00.000Z",
                  "answerer_name": "Seller",
                  "helpfulness": 8,
                  "photos": []
              }
          }
      }
  ]
};

afterEach(cleanup);

//----------QandA----------//
describe("Q&A Widget", () => {
  test("should render Questions and Answer Widget", async () => {
    render(<QandA/>);
    await waitFor(() => {
      var QandAElement = screen.getByTestId('question-and-answer-main');
      expect(QandAElement).toBeInTheDocument();
    });
  });

  test("should render widget title when DOM is loaded", async () => {
    render(<QandA/>);
    var title = screen.getByText("QUESTIONS & ANSWERS");
    expect(title).toBeInTheDocument();
  });

  test("should render 'Seems like there is no question posted for this product...' when DOM is loaded", async () => {
    render(<QandA/>);
    await waitFor(() => {
      var errMsg = screen.getByText('Seems like there is no question posted for this product...');
      expect(errMsg).toBeInTheDocument();
    });
  })

  test("should render a button labelled 'ADD A QUESTION' when DOM is loaded without any question or answer", async () => {
    render(<QandA/>);
    var addQBtn = screen.getByTestId("question-and-answer-add-question-btn");
    expect(addQBtn).toBeInTheDocument();
  });

});

//----------QAList----------//
describe("QA List", () => {
  test("should render QAList from the props", () => {
    render(<QAList list={mockData.results} product_name={'test'}/>);
    var QAListElement = screen.getByTestId('question-and-answer-qalist');
    expect(QAListElement).toBeInTheDocument();
  })
});

//----------QAItem----------//
describe("QA Item", () => {
  test("should render QAItem from the props", () => {
    render(<QAItem item={mockData.results[0]} isAModalOpen={false}/>);
    var QAItemElement = screen.getByTestId('question-and-answer-qaitem');
    expect(QAItemElement).toBeInTheDocument();
  });

  test("should include the followings: question, helpful count, 'Add Answer' event handler, and a button to load more answered questions", () => {
    render(<QAItem item={mockData.results[0]} key={mockData.results[0].question_id} isAModalOpen={false}/>);
    var heading = screen.getByTestId('qaitem-question-body').textContent;
    var helpfulCount = screen.getByTestId('qaitem-question-helpful-count').textContent;
    var addAnswer = screen.getByTestId('qaitem-add-answer').textContent;
    var moreAnswers = screen.getByTestId('qaitem-more-answers-btn').textContent;
    expect(heading).toEqual(`Q: ${mockData.results[0].question_body}`);
    expect(helpfulCount).toEqual(`(${mockData.results[0].question_helpfulness})`);
    expect(addAnswer).toEqual('Add Answer');
    expect(moreAnswers).toEqual('See more answers');
  });

  test ("should open an answer modal when 'Add Answer' button is clicked", async() => {
    var handleAModalOpen = jest.fn();
    render(<QAItem item={mockData.results[0]} isAModalOpen={false} handleAModalOpen={handleAModalOpen}/>);
    fireEvent.click(screen.getByTestId('qaitem-add-answer'));
    await waitFor(() => {
      expect(handleAModalOpen).toHaveBeenCalledTimes(1);
    })
  })
});

//----------AnswerList----------//
describe("AnswerList", () => {
  test("should render AnswerList from the props", () => {
    render(<AnswerList list={Object.values(mockData.results[0].answers)}/>);
    var AnswerListElement = screen.getByTestId('question-and-answer-answerlist');
    expect(AnswerListElement).toBeInTheDocument();
  })
});

//----------AnswerItem----------//
describe("AnswerItem", () => {
  test("should render AnswerItem from the props", () => {
    render(<AnswerItem item={Object.values(mockData.results[0].answers)[0]}/>);
    var AnswerItemElement = screen.getByTestId('question-and-answer-answeritem');
    expect(AnswerItemElement).toBeInTheDocument();
  });

  test("should render correct answer body", async () => {
    render(<AnswerItem item={Object.values(mockData.results[0].answers)[0]}/>);
    var AnswerBody = screen.getByTestId('question-and-answer-answer-body').textContent;
    expect(AnswerBody).toEqual(Object.values(mockData.results[0].answers)[0].body);
  });

  test("should render correct answerer name", async () => {
    render(<AnswerItem item={Object.values(mockData.results[0].answers)[0]}/>);
    var AnswererName = screen.getByTestId('question-and-answer-answer-answerer').textContent;
    expect(AnswererName).toEqual(`by ${Object.values(mockData.results[0].answers)[0].answerer_name},`);
  });

  test("should render correct helpfulness count", async () => {
    render(<AnswerItem item={Object.values(mockData.results[0].answers)[0]}/>);
    var helpfulCount = screen.getByTestId('answeritem-helpful-count').textContent;
    expect(helpfulCount).toEqual(`(${Object.values(mockData.results[0].answers)[0].helpfulness})`);
  });
});

//----------AnswerModal----------//
describe("Answer Modal", () => {
  test("should render AnswerModal from the props", () => {
    render(<AnswerModal isAModalOpen={true} question={'question_test'} product_name={'test'}/>);
    var AnswerModalElement = screen.getByTestId('answer-modal');
    expect(AnswerModalElement).toBeInTheDocument();
  });

  test("should render correct question and product name from the props", async () => {
    render(<AnswerModal isAModalOpen={true} question={'question_test'} product_name={'test'}/>);
    var subtitle = screen.getByTestId('answer-modal-subtitle').textContent;
    expect(subtitle).toEqual('test:question_test');
  });

  test("should render three text inputs: Answer, Nickname & Email", () => {
    render(<AnswerModal isAModalOpen={true} question={'question_test'} product_name={'test'}/>);
    var answerInput = screen.getByTestId('AModal-Answer');
    var emailInput = screen.getByTestId('AModal-Email');
    var nicknameInput = screen.getByTestId('AModal-Nickname');
    expect(answerInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(nicknameInput).toBeInTheDocument();
  });

  test("should throw error message when the input field is not filled", async () => {
    render(<AnswerModal isAModalOpen={true} question={'question_test'} product_name={'test'}/>);
    var submitBtn = screen.getByTestId('AModal-Submit-Btn');
    fireEvent.click(submitBtn);
    expect(await screen.findByText('You must enter the following: Answer')).toBeInTheDocument();
    expect(await screen.findByText('You must enter the following: Nickname')).toBeInTheDocument();
    expect(await screen.findByText('You must enter the following: Email')).toBeInTheDocument();
  });

  test("should have UPLOAD IMAGE button for users to upload images", async () => {
    render(<AnswerModal isAModalOpen={true} question={'question_test'} product_name={'test'}/>);
    var imageBtn = screen.getByTestId('AModal-Upload-Btn');
    expect(imageBtn).toBeInTheDocument();
  });
});

//----------QuestionModal----------//
describe("Question Modal", () => {
  test("should render QuestionModal from the props", () => {
    render(<QuestionModal isQModalOpen={true}/>);
    var QuestionModalElement = screen.getByTestId('question-modal');
    expect(QuestionModalElement).toBeInTheDocument();
  });

  test("should render three text inputs: Question, Nickname & Email", () => {
    render(<QuestionModal isQModalOpen={true}/>);
    var questionInput = screen.getByTestId('QModal-Question');
    var emailInput = screen.getByTestId('QModal-Email');
    var nicknameInput = screen.getByTestId('QModal-Nickname');
    expect(questionInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(nicknameInput).toBeInTheDocument();
  });

  test("should throw error message when the input field is not filled", async () => {
    render(<QuestionModal isQModalOpen={true} />);
    var submitBtn = screen.getByTestId('QModal-Submit-Btn');
    fireEvent.click(submitBtn)
    expect(await screen.findByText('You must enter the following: Question')).toBeInTheDocument();
    expect(await screen.findByText('You must enter the following: Nickname')).toBeInTheDocument();
    expect(await screen.findByText('You must enter the following: Email')).toBeInTheDocument();
  })
});

//----------Search----------//
describe("Search Bar", () => {
  test("should render Search Bar", () => {
    render(<Search/>);
    var SearchElement = screen.getByTestId('question-and-answer-search-bar');
    expect(SearchElement).toBeInTheDocument();
  })
});