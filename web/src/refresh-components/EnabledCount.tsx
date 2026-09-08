"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { Text } from "@opal/components";
import { richNodes } from "@opal/utils";

interface EnabledCountProps {
  enabledCount: number;
  totalCount: number;
}

const EnabledCount = memo(({ enabledCount, totalCount }: EnabledCountProps) => {
  const t = useTranslations("common");
  return (
    <Text font="main-ui-body" color="text-03">
      {richNodes(
        t.rich("enabledCount.label", {
          enabled: enabledCount,
          total: totalCount,
          // The enabled figure takes the selection color, which Text has no token for.
          count: (chunks) => (
            <span className="text-action-selection-05">
              <Text font="main-ui-body" color="inherit">
                {richNodes(chunks)}
              </Text>
            </span>
          ),
        })
      )}
    </Text>
  );
});
EnabledCount.displayName = "EnabledCount";

export default EnabledCount;
