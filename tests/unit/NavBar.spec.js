import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';

// Mock router-link and font-awesome-icon to avoid errors
const routes = [
  { path: '/about', name: 'about' },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('NavBar.vue', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(NavBar, {
      global: {
        plugins: [router],
        components: { FontAwesomeIcon }
      },
    });
    await router.isReady();
  });

  it('renders a link to each section', () => {
    const links = wrapper.findAll('li');
    expect(links).toHaveLength(4); // Home, Experience, Projects, LinkedIn
  });

  it('renders router-links correctly', () => {
    const routerLinks = wrapper.findAllComponents({ name: 'RouterLink' });
    expect(routerLinks).toHaveLength(3); // Only Home, Experience, Projects use router-links
    expect(routerLinks[0].props().to).toEqual({ name: 'about' });
    expect(routerLinks[1].props().to).toEqual({ name: 'about', hash: '#experience' });
    expect(routerLinks[2].props().to).toEqual({ name: 'about', hash: '#project' });
  });

  it('renders external LinkedIn link correctly', () => {
    const linkedInLink = wrapper.find('a[href="https://www.linkedin.com/in/amaraladil/"]');
    expect(linkedInLink.exists()).toBe(true);
    expect(linkedInLink.text()).toContain('LinkedIn');
  });

  it('toggles isOpen state when toggle is called', async () => {
    expect(wrapper.vm.isOpen).toBe(false);
    wrapper.vm.toggle();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isOpen).toBe(true);
    wrapper.vm.toggle();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('shows link-text when nav is expanded', async () => {
    wrapper.vm.isOpen = true;
    await wrapper.vm.$nextTick();
    const linkTexts = wrapper.findAll('.link-text');
    linkTexts.forEach((text) => {
      expect(text.isVisible()).toBe(true);
    });
  });
});
