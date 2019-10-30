import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Content as InnerContent } from './Content';

export const Main = (props: any): JSX.Element => {
  //   const { isSigned } = props;
  const isSigned = true;
  return isSigned ? (
    <div>
      Constant Layout: Navbar, Footer And Sidebar
      <div>
        {/* Need a sidebar that trigger to path */}
        Sidebar Trigger
        <div>
          <Link to="/menus">Example Menu Item</Link>
        </div>
        <InnerContent />
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};
