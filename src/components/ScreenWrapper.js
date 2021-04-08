import React, { useState } from 'react'
import { Menu, Row, Col, PageHeader } from 'antd';
import { LandingPage } from './LandingPage';

export const ScreenWrapper = function ({routes}) {
    return (
        <>
          <LandingPage
            innerRoutes = {routes}
          />
        </>
    )
}