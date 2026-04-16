import { hosts } from '../data/hosts.js';
import { SHOW } from '../data/episodes.js';

export function buildHostsPage(baseUrl: string) {
  const itemIds: string[] = [];
  const elements: Record<string, any> = {};

  hosts.forEach((host, i) => {
    const itemId = `host_${i}`;
    const btnId = `view_${i}`;
    itemIds.push(itemId);

    elements[itemId] = {
      type: 'item' as const,
      props: {
        title: host.displayName,
        description: host.bio,
      },
      children: [btnId],
    };

    elements[btnId] = {
      type: 'button' as const,
      props: { label: 'Profile', icon: 'user' as const },
      on: {
        press: {
          action: 'view_profile' as const,
          params: { fid: host.fid },
        },
      },
    };
  });

  elements.page = {
    type: 'stack' as const,
    props: { direction: 'vertical' as const, gap: 'md' as const },
    children: ['header', 'subtitle', 'host_list', 'back_btn'],
  };

  elements.header = {
    type: 'text' as const,
    props: { content: SHOW.name, weight: 'bold' as const },
  };

  elements.subtitle = {
    type: 'text' as const,
    props: { content: 'Your Hosts', size: 'sm' as const },
  };

  elements.host_list = {
    type: 'item_group' as const,
    props: {},
    children: itemIds,
  };

  elements.back_btn = {
    type: 'button' as const,
    props: { label: 'Back', icon: 'arrow-left' as const },
    on: {
      press: {
        action: 'submit' as const,
        params: { target: `${baseUrl}/` },
      },
    },
  };

  return {
    version: '2.0' as const,
    theme: { accent: 'blue' as const },
    ui: { root: 'page', elements },
  };
}
