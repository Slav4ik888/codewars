import { convertFromHTML } from "draft-convert";
import { BlockType, EntityType, InlineStyle } from "../types";


export const HTMLtoState = convertFromHTML<DOMStringMap, BlockType>({
  htmlToStyle: (nodeName, node, currentStyle) => {
    if (nodeName === 'strong') {
        return currentStyle.add(InlineStyle.BOLD);
    }
    if (nodeName === 'span' && node.classList.contains('accent')) {
      return currentStyle.add(InlineStyle.ACCENT);
    }

    return currentStyle;
  },
  htmlToBlock(nodeName, node) {
    switch (nodeName) {
      case 'h1':
        return BlockType.h1;
      case 'div':
      case 'p':
        return BlockType.default;
      default:
        return null;
    }
  },
  htmlToEntity: (nodeName, node, createEntity) => {
    if (nodeName === 'a' && node.href) {
      return createEntity(EntityType.link, 'MUTABLE', { url: node.href });
    }

    return undefined;

  },
});
