import React from 'react';
import FlowingMenu from '@/app/components/FlowingMenu';

interface IndustriesSectionProps {
  onNavigateToProduct?: (productId: string) => void;
}

export function IndustriesSection({ onNavigateToProduct }: IndustriesSectionProps) {
  const menuItems = [
    {
      link: '#',
      text: 'Custom Precision Training LLM\'s and Chatbots',
      image: 'https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njg0ODk3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productId: 'llm'
    },
    {
      link: '#',
      text: 'Code Review Services',
      image: 'https://images.unsplash.com/photo-1735815952441-224afdf53016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcmV2aWV3JTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY4NDg5NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productId: 'code'
    },
    {
      link: '#',
      text: 'Quick Service',
      image: 'https://images.unsplash.com/photo-1612574935301-af13ccce9258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwc2VydmljZSUyMHNwZWVkfGVufDF8fHx8MTc2ODQ4OTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productId: 'quickify'
    },
    {
      link: '#',
      text: 'CosmuBuilder (Launching soon)',
      image: 'https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwYnVpbGRlciUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2ODQ4OTcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productId: 'placeholder1'
    },
    {
      link: '#',
      text: 'Intelligent Document Analysis',
      image: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMGFuYWx5c2lzJTIwZGF0YXxlbnwxfHx8fDE3Njg0ODk3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productId: 'placeholder2'
    },
  ];

  // Override click handlers to navigate to product pages
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href.includes('#')) {
        e.preventDefault();
        const text = link.textContent?.trim();
        const item = menuItems.find(item => item.text === text || (text && item.text.toLowerCase().includes(text.toLowerCase())));
        if (item && onNavigateToProduct) {
          onNavigateToProduct(item.productId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [onNavigateToProduct]);

  return (
    <section id="industries" className="py-0 px-0 bg-black">
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu
          items={menuItems}
          speed={15}
          textColor="#FFFFFF"
          bgColor="#000000"
          marqueeBgColor="#00A8B5"
          marqueeTextColor="#000000"
          borderColor="#00A8B5"
        />
      </div>
    </section>
  );
}
