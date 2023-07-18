import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './GridSystem.module.scss';

const cx = classNames.bind(styles);

interface GridProps {
   children: ReactNode;
   className?: string; 
}

export const Grid: React.FC<GridProps> = ({ children, className }) => {
   const gridClassName = cx('grid', className); 
   return <div className={gridClassName}>{children}</div>;
};

export const GridWide: React.FC<GridProps> = ({ children, className }) => {
   const gridWideClassName = cx('grid', 'wide', className); 
   return <div className={gridWideClassName}>{children}</div>;
};

export const Row: React.FC<GridProps> = ({ children, className }) => {
   const rowClassName = cx('row', className); 
   return <div className={rowClassName}>{children}</div>;
};

export const RowNoGutter: React.FC<GridProps> = ({ children, className }) => {
   const rowNoGutterClassName = cx('row', 'no-gutters', className); 
   return <div className={rowNoGutterClassName}>{children}</div>;
};

interface ColProps extends GridProps {
   size: string[];
   offset?: string[];
}

export const Col: React.FC<ColProps> = ({ size, offset, children, className }) => {
   const colClasses = size.map((s) => cx('col', s));
   const offsetClasses = offset && offset.map((o) => cx(`offset-${o.replace('-o-', '-')}`));
   const colClassName = cx(colClasses, offsetClasses, className); 

   return <div className={colClassName}>{children}</div>;
};

// Usage example
// <Row className="custom-row-class">
//   <Col size={['l-6', 'm-6', 's-6']} offset={['l-o-2', 'm-o-4', 's-o-6']} className="custom-col-class">
//     Content 1
//   </Col>
//   <Col size={['l-6', 'm-6', 's-6']} offset={['l-o-2', 'm-o-4', 's-o-6']} className="custom-col-class">
//     Content 2
//   </Col>
// </Row>
