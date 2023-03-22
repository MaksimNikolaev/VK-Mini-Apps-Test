import { Icon28UserCircleOutline } from "@vkontakte/icons";
import { Cell, Epic, Group, Panel, PanelHeader, PanelHeaderBack, Placeholder, Platform, SplitCol, SplitLayout, Tabbar, TabbarItem, useAdaptivityConditionalRender, usePlatform, View } from "@vkontakte/vkui";
import React from "react";

export const Screen = () => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();
  const [activeStory, setActiveStory] = React.useState('chapter1');
  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
  const isVKCOM = platform !== Platform.VKCOM;

  return (
    <SplitLayout
      header={isVKCOM && <PanelHeader separator={false} />}
      style={{ justifyContent: 'center' }}
    >
      {viewWidth.tabletPlus && (
        <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
          <Panel>
            {isVKCOM && <PanelHeader />}
            <Group>
              <Cell
                disabled={activeStory === 'chapter1'}
                style={
                  activeStory === 'chapter1'
                    ? {
                        backgroundColor: 'var(--vkui--color_background_secondary)',
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="chapter1"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}
              >
                Раздел №1
              </Cell>
              <Cell
                disabled={activeStory === 'chapter2'}
                style={
                  activeStory === 'chapter2'
                    ? {
                        backgroundColor: 'var(--vkui--color_background_secondary)',
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="chapter2"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}
              >
                Раздел №2
              </Cell>
              <Cell
                disabled={activeStory === 'chapter3'}
                style={
                  activeStory === 'chapter3'
                    ? {
                        backgroundColor: 'var(--vkui--color_background_secondary)',
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="chapter3"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}
              >
                Раздел №3
              </Cell>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <Epic
          activeStory={activeStory}
          tabbar={
            viewWidth.tabletMinus && (
              <Tabbar className={viewWidth.tabletMinus.className}>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'chapter1'}
                  data-story="chapter1"                  
                  text="Раздел №1"
                >
                  <Icon28UserCircleOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'chapter2'}
                  data-story="chapter2"                  
                  text="Раздел №2"
                >
                  <Icon28UserCircleOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'chapter3'}
                  data-story="chapter3"                  
                  text="Раздел №3"
                >
                  <Icon28UserCircleOutline />
                </TabbarItem>
              </Tabbar>
            )
          }
        >
          {/* Отображение содержимого */}         
          <View id="chapter1" activePanel="chapter1">
            <Panel id="chapter1">
              <PanelHeader before={<PanelHeaderBack />}>Раздел №1</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder
                  icon={<Icon28UserCircleOutline width={56} height={56} />}
                >Содержимое первого раздела</Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="chapter2" activePanel="chapter2">
            <Panel id="chapter2">
              <PanelHeader before={<PanelHeaderBack />}>Раздел №2</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder
                  icon={<Icon28UserCircleOutline width={56} height={56} />}
                >Содержимое второго раздела</Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="chapter3" activePanel="chapter3">
            <Panel id="chapter3">
              <PanelHeader before={<PanelHeaderBack />}>Раздел №3</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder
                  icon={<Icon28UserCircleOutline width={56} height={56} />}
                >Содержимое третьего раздела</Placeholder>
              </Group>
            </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};