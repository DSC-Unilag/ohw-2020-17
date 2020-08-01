import React,{ useEffect } from "react";

var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state,  isMobileSidebarNotOpened: !state.isMobileSidebarNotOpened };
     case "TOGGLE_PERMANENT":
      return { ...state, isPermanent:action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }) {
  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
});

  var [state, dispatch] = React.useReducer(layoutReducer, {
    isMobileSidebarNotOpened: true,
    isPermanent:true
  });


  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth =768;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && state.isPermanent) {
     dispatch({type:"TOGGLE_PERMANENT",payload:false});
    } else if (!isSmallScreen && !state.isPermanent) {
       dispatch({type:"TOGGLE_PERMANENT",payload:true});
    }
  }
}

function useLayoutState() {
  var context = React.useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useLayoutDispatch() {
  var context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar };

// ###########################################################
function toggleSidebar(dispatch) {
  dispatch({
    type: "TOGGLE_SIDEBAR",
  });
}

 