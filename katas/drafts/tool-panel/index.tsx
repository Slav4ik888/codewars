import * as React from 'react';
import { Box, Button } from '@mui/material';
import { useEditor } from '../text-editor/use-editor';
import { BlockType, InlineStyle } from '../types';
import { cl, FlexWrap } from '../../../styles';


const INLINE_STYLES_CODES = Object.values(InlineStyle);


const useStyles = (currentBlockType: BlockType) => ({
  root: {
    display: `flex`,
    flexWrap: FlexWrap.WRAP,
    alignItems: `center`,
    mx: `-5px`,
  },
  tool__item: {
    flexShrink: 0,
    mt: 0, mr: 0.5, mb: 1.5,
  },
  h1: {
    color: currentBlockType === BlockType.h1 ? `red` : `inherit`
  },
  h2: {
    color: currentBlockType === BlockType.h2 ? `red` : `inherit`
  },
  cite: {
    color: currentBlockType === BlockType.cite ? `red` : `inherit`
  },
  default: {
    color: currentBlockType === BlockType.default ? `red` : `inherit`
  },
  active: {
    color: `red`
  }
});


const ToolPanel: React.FC = () => {
  
  const {
    toHtml,
    addLink,
    toggleBlockType,
    currentBlockType,
    toggleInlineStyle,
    hasInlineStyle
  } = useEditor();

  const sx = useStyles(currentBlockType);


  const handlerAddLink = () => {
    const url = prompt('URL:');

    if (url) {
      addLink(url);
    }
  };

  return (
    <Box sx={sx.root}>
      <Button sx={{ ...sx.tool__item, ...sx.h1}}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.h1);
        }}
      >
        Заголовок
      </Button>

      <Button sx={{ ...sx.tool__item, ...sx.h2}}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.h2);
        }}
      >
        Подзаголовок
      </Button>
      <Button sx={{ ...sx.tool__item, ...sx.cite}}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.cite);
        }}
      >
        Сноска
      </Button>
      <Button sx={{ ...sx.tool__item, ...sx.default}}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.default);
        }}
      >
        Простой
      </Button>

      {Object.values(InlineStyle).map((v) => (
        <Button
          key={v}
          sx={{ ...sx.tool__item, ...cl(sx.active, hasInlineStyle(v)) }}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle(v);
          }}
        >
          {v}
        </Button>
      ))}

      <Button
        sx={sx.tool__item}
        onClick={handlerAddLink}
      >
        LINK
      </Button>

      <Button
        sx={sx.tool__item}
        onClick={() => {
          console.log(toHtml());
        }}
      >
        Print
      </Button>

    </Box>
  );
}

export default ToolPanel;
