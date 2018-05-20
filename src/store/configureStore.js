import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import immutableCheckMiddleWare from 'redux-immutable-state-invariant';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import debounce from 'redux-storage-decorator-debounce';
import filter from 'redux-storage-decorator-filter';

let initialState = {};

if(process.env.NODE_ENV === 'development') {
  initialState = {
    settings: {
      userId: 12345,
      firstName: "Justin",
      lastName: "Gauthier",
      email: "justin@teambrightly.com",
      avatar: "path to asset"
    },
    vacationInfo: {
      timeRemaining: 820800, //seconds
      timePending: 28800, //seconds (virtual state)
      timeApproved: 28800, //seonds (virtual state)
      timeAccrumentDate: "Mon Janurary 1 2018 01:00:00 GMT-0400 (EDT)",
      timeExpireDate: "Tue January 1 2019 01:00:00 GMT-0400 (EDT)",
      timeAccrumentAmount: 792000, //seconds
      timeCap: 792000, //seconds
      timeWillExpire: 28800, //seconds (virtual state)
    },
    vacationTime: [
      {
        month: 'June',
        year: 2018,
        dates: [
          {
            dateRequested: "Fri May 18 2018 13:00:00 GMT-0400 (EDT)",
            dateStart: "Mon June 11 2018 01:00:00 GMT-0400 (EDT)",
            dateEnd: "Wed June 13 2018 23:59:59 GMT-0400 (EDT)",
            status: "Approved", //Requested Denied
            messages: [
              {
                userId: 12345,
                dateSent: "Fri May 18 2018 13:00:00 GMT-0400 (EDT)",
                body: "I want this off for my birthday.",
                status: "Requested"
              },
              {
                userId: 123,
                dateSent: "Fri May 18 2018 15:00:00 GMT-0400 (EDT)",
                body: "This wont work can you change it to this date?",
                status: "Denied"
              },
              {
                userId: 12345,
                dateSent: "Fri May 18 2018 15:05:00 GMT-0400 (EDT)",
                body: "Sure how about this?",
                status: "Requested",
              },
              {
                userId: 123,
                dateSent: "Sat May 19 2018 12:00:00 GMT-0400 (EDT)",
                body: "Perfect Thanks",
                status: "Approved"
              }
            ]
          },
          {
            dateRequested: "Fri May 18 2018 13:15:00 GMT-0400 (EDT)",
            dateStart: "Fri June 15 2018 01:00:00 GMT-0400 (EDT)",
            dateEnd: "Fri June 15 2018 24:00:00 GMT-0400 (EDT)",
            status: "Approved", //Requested Denied
            messages: [
              {
                userId: 12345,
                dateSent: "Fri May 18 2018 13:00:00 GMT-0400 (EDT)",
                body: "I want this off for my birthday.",
                status: "Requested"
              },
              {
                userId: 123,
                dateSent: "Fri May 18 2018 15:00:00 GMT-0400 (EDT)",
                body: "This wont work can you change it to this date?",
                status: "Denied"
              },
              {
                userId: 12345,
                dateSent: "Fri May 18 2018 15:05:00 GMT-0400 (EDT)",
                body: "Sure how about this?",
                status: "Requested",
              },
              {
                userId: 123,
                dateSent: "Sat May 19 2018 12:00:00 GMT-0400 (EDT)",
                body: "Perfect Thanks",
                status: "Approved"
              }
            ]
          }
        ]
      }
    ],
    companySettings: {
      vacationAccurmentTerm: 'annually',
      comapnyClosed: [
        {
          dateStart: "Mon May 28 2018 01:00:00 GMT-0400 (EDT)",
          dateEnd: "Mon May 28 2018 23:59:59 GMT-0400 (EDT)",
        }
      ]
    }
  }
}

// Setup
const middleWare = [];

// Immutability Check
if (process.env.NODE_ENV === 'development') {
  middleWare.push(immutableCheckMiddleWare());
}

// Redux Store
const wrappedReducer = storage.reducer(rootReducer);

let engine = createEngine('my-save-key');
engine = debounce(engine, 1000);
engine = filter(engine, ['auth']);

const reduxStorageMiddleware = storage.createMiddleware(engine);
middleWare.push(reduxStorageMiddleware);
const loadStore = storage.createLoader(engine);

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
export default function makeStore(callback) {
 const store = createStoreWithMiddleware(wrappedReducer, initialState);
 loadStore(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));
  return store;
}