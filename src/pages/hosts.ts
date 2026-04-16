import { hosts } from '../data/hosts.js';
import { SHOW } from '../data/episodes.js';

export function buildHostsPage(baseUrl: string) {
  const elements: Record<string, any> = {};

  // Header
  elements.header = {
    type: 'item' as const,
    props: {
      title: SHOW.name,
      description: 'Meet Your Hosts',
    },
    children: ['header_badge'],
  };
  elements.header_badge = {
    type: 'badge' as const,
    props: { label: `${hosts.length} Hosts`, color: 'purple' as const, icon: 'users' as const },
  };

  // Build host items
  const hostItemIds: string[] = [];

  hosts.forEach((host, i) => {
    const itemId = `host_${i}`;
    const badgeId = `role_${i}`;
    const profileBtnId = `profile_${i}`;
    hostItemIds.push(itemId);

    const angleBadgeId = `angle_${i}`;

    elements[itemId] = {
      type: 'item' as const,
      props: {
        title: `@${host.username} - ${host.displayName}`,
        description: `${host.bio} | ${host.angle}`,
      },
      children: [profileBtnId],
    };

    elements[profileBtnId] = {
      type: 'button' as const,
      props: { label: 'View', icon: 'user' as const },
      on: {
        press: {
          action: 'view_profile' as const,
          params: { fid: host.fid },
        },
      },
    };
  });

  elements.host_list = {
    type: 'item_group' as const,
    props: { separator: true },
    children: hostItemIds,
  };

  // Tagline
  elements.tagline = {
    type: 'text' as const,
    props: {
      content: SHOW.tagline,
      size: 'sm' as const,
      align: 'center' as const,
    },
  };

  // Buttons
  elements.btn_row = {
    type: 'stack' as const,
    props: { direction: 'horizontal' as const, gap: 'sm' as const },
    children: ['back_btn', 'share_btn'],
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

  elements.share_btn = {
    type: 'button' as const,
    props: { label: 'Share Show', variant: 'primary' as const, icon: 'share' as const },
    on: {
      press: {
        action: 'compose_cast' as const,
        params: {
          text: `${SHOW.name} - ${SHOW.tagline}\n\nHosted by @zaal @ohnahji @wethemniggas`,
          embeds: [baseUrl],
        },
      },
    },
  };

  // Page
  elements.page = {
    type: 'stack' as const,
    props: { direction: 'vertical' as const, gap: 'md' as const },
    children: ['header', 'host_list', 'tagline', 'btn_row'],
  };

  return {
    version: '2.0' as const,
    theme: { accent: 'purple' as const },
    ui: { root: 'page', elements },
  };
}
