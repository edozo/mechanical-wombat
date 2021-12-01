import styled from 'styled-components';
import { H1 } from '../../Typography';

export const BackgroundMessage = styled.span`
  font-weight: 700;
  color: rgba(180, 238, 249, 0.5);
  font-size: 200px;
  text-align: center;
  line-height: 100%;
  margin-bottom: -110px;
`;

export const ForegroundMessage = styled(H1)`
  text-align: center;
  margin-bottom: 80px;
`;

export const ErrorInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${p => p.theme.font.size.h4};
  line-height: ${p => p.theme.font.lineHeight.text.xlarge};
  font-weight: ${p => p.theme.font.weight.semibold};
`;
