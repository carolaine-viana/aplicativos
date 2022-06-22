import styled from 'styled-components/native';

const FlexBox = styled.View<FlexBoxProps>`
  ${({
    theme,
    direction = 'column',
    flex = 1,
    align = 'start',
    justify = 'start',
    space = 'between',
    bg = 'default',
  }) => {
    const { palette } = theme;
    return {
      flex,
      'flex-direction': direction,
      'align-items': getFlexPosition(align),
      'justify-content': space ? `space-${space}` : getFlexPosition(justify),
      'background-color': bg === 'none' ? 'transparent' : palette.background[bg],
      width: '100%',
      // height: '100%',
    };
  }}
`;

const FlexCenter = styled(FlexBox)`
  align-items: center;
  justify-content: center;
`;

const FlexStart = styled(FlexBox)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const FlexEnd = styled(FlexBox)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const FlexTop = styled(FlexBox)`
  flex-direction: column;
  align-items: ${(props) => getFlexPosition(props.align)};
  justify-content: flex-start;
`;

const FlexBottom = styled(FlexBox)`
  flex-direction: column;
  align-items: ${(props) => getFlexPosition(props.align)};
  justify-content: flex-end;
`;

const FlexSlice = styled.View<FlexBoxProps>`
  flex-direction: ${(props) => props.direction ?? 'column'};
  flex: ${(props) => props.flex ?? 0.5};
  justify-content: ${(props) => getFlexPosition(props.justify) ?? 'flex-start'};
`;

const FlexRow = styled.View<FlexBoxProps>`
  flex-direction: row;
`;

const startEnd = ['start', 'end'];
const getFlexPosition = (value?: string) => {
  if (!value) {
    return 'flex-start';
  }
  if (startEnd.includes(value)) {
    return `flex-${value}`;
  }
  return value;
};

interface FlexBoxProps {
  flex?: number;
  direction?: string;
  align?: 'stretch' | 'start' | 'end' | 'center';
  justify?: 'start' | 'end' | 'center';
  space?: 'between' | 'around' | 'evenly';
  bg?: 'dark' | 'light' | 'default' | 'none';
}

export { FlexBox, FlexCenter, FlexStart, FlexEnd, FlexBottom, FlexTop, FlexSlice, FlexRow };
