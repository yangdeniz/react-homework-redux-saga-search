import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import skillsReducer from './reducers/skills-reducer';
import saga from './sagas/root-saga';

const reducer = combineReducers({
  skills: skillsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(reducer, compose(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store;