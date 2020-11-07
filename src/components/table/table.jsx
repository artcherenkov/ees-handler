import React, {useCallback} from 'react';

import {HEADERS, SectionTypes} from '../../const.js';

import HeaderSection from "../headers-section/headers-section.jsx";
import Section from "../section/section.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addSection as addSectionAction} from "../../store/action";
import {getSectionsCount} from "../../store/reducers/app-state/selectors";
import {nanoid} from "nanoid";

const Table = () => {
  const dispatch = useDispatch();

  const sectionsCount = useSelector((state) => getSectionsCount(state));

  const addSection = useCallback(
      () => dispatch(addSectionAction()),
      [dispatch]
  );

  const getSections = (count) => {
    let sections = [];
    for (let i = 0; i < count; i++) {
      sections.push(SectionTypes.MAIN);
    }

    return sections;
  };

  return <div className="table">
    <button onClick={addSection}>Click me</button>
    <HeaderSection headers={HEADERS} />
    {getSections(sectionsCount).map((type) => <Section key={nanoid()} type={type} />)}
  </div>;
};

export default Table;
