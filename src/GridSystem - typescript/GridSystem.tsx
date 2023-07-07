import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './GridSystem.module.scss';

const cx = classNames.bind(styles);

interface GridProps {
   children: ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children }) => {
   return <div className={cx('grid')}>{children}</div>;
};

export const GridWide: React.FC<GridProps> = ({ children }) => {
   return <div className={cx('grid', 'wide-grid')}>{children}</div>;
};

export const Row: React.FC<GridProps> = ({ children }) => {
   return <div className={cx('row')}>{children}</div>;
};

interface ColProps {
   size: string[];
   offset?: string[];
   children: ReactNode;
}

export const Col: React.FC<ColProps> = ({ size, offset, children }) => {
   const colClasses = size.map((s) => cx('col', s));
   const offsetClasses = offset && offset.map((o) => cx(`offset-${o.replace('-o-', '-')}`));
   const colClassName = cx(colClasses, offsetClasses);

   return <div className={colClassName}>{children}</div>;
};

//<Col size={['l-6', 'm-6', 's-6']} offset={['l-o-2', 'm-o-4', 's-o-6']}>
//   Content 1
// </Col>

// <Col size={['l-6', 'm-6', 's-6']} offset={['l-o-2', 'm-o-4', 's-o-6']}>
//   Content 2
// </Col>
