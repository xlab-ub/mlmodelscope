import splitIntoRows, {groupRow} from "../utils/splitIntoRows";
import FindUniqueNumbers from "../utils/FindUniqueNumbers";
import {useMemo} from "react";
import {useHoverControl} from "../../_Common/hooks/useHoverControl";
import NormalizeIntMask from "../utils/NormalizeIntMask";
import {ColorGenerator} from "../../_Common/utils/ColorGenerator";

export default function useImageSegmentationControl(trial) {
  const semanticSegment = trial.results.responses[0].features[0].semantic_segment;
  const normalizedIntMask = useMemo(() => NormalizeIntMask(semanticSegment.int_mask, semanticSegment.width, semanticSegment.height), [])
  const rows = useMemo(() => splitIntoRows(
    normalizedIntMask,
    semanticSegment.width
  ), []);

  const uniqueNumbers = useMemo(() => FindUniqueNumbers(normalizedIntMask), []);
  const colorMap = useMemo(() => new ColorGenerator().CreateColorMapping(uniqueNumbers), []);

  const hover = useHoverControl();
  const groupedRows = useMemo(() => rows.map(row => groupRow(row)), []);
  return {rows: groupedRows, colorMap, hover};
}
