import React from 'react';
import { Image, Container, Row, Col } from '../index';

export default {
  title: 'components/Image',
  component: Image,
  argTypes: {},
};

export const _Image = () => {
  const image1 = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b155220ed%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b155220ed%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.875%22%20y%3D%2295.2828125%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  const image2 = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22846%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20846%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b15525464%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b15525464%22%3E%3Crect%20width%3D%22846%22%20height%3D%22250%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22319.5859375%22%20y%3D%22147.565625%22%3E846x250%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  return (
    <>
      <h3>Shape</h3>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={image1} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={image1} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src={image1} thumbnail />
          </Col>
        </Row>
      </Container>

      <br />
      <h3>Fluid</h3>
      <Image src={image2} fluid />
    </>
  );
};