# react_tutorial_blog
This a react app created from a udemy course called Modern React with Redux by Stephen Grider. The purpose of this app is to solidify understanding of  Redux reducers, making API requests with Redux, and  understand purpose of 'redux-thunk'

Grider has excellent visual diagrams (flowcharts) to explain react and redux interworking relationship. Also a great diagram explaining workings of redux-thunk

Summary:
1)Learn to use redux-thunk with applyMiddleware
2) redux-thunk allows optional return of a function instead of just a action object. This allows for use of api request from an action creator
3) Use an action creator that calls other action reducers in helping with over-fetching
4) Reducer: first argument is state/return new array to get redux to realize something has changed and update
