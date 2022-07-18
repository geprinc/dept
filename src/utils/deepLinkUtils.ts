import { parse } from 'url';

import { camelCaseSerializer } from '@constants/serializers';

export const handleURL = (url?: string | null) => {
  if (!url) return;

  const { pathname, query: snakeCaseQuery } = parse(url, true);
  const query = camelCaseSerializer.serialize(snakeCaseQuery);
    console.log(query);
};
