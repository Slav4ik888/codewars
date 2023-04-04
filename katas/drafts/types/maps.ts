import Immutable from 'immutable';
import { DefaultDraftBlockRenderMap } from "draft-js";
import { BlockType } from ".";


const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
  [BlockType.cite]: {
    element: 'cite', // название тега
  },
});


export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(CUSTOM_BLOCK_RENDER_MAP);
